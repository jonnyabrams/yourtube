import { Modal, useMantineTheme } from "@mantine/core";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./edit-profile-modal.css";
import { useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../../firebase";

const EditProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [img, setImg] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [inputs, setInputs] = useState({
    name: currentUser?.name,
    email: currentUser?.email,
    password: currentUser?.password,
    img: currentUser?.img,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file?.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs({ ...inputs, img: downloadURL });
        });
      }
    );
  };

  useEffect(() => {
    img && uploadFile(img);
  }, [img]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(updateStart());

    try {
      const res = await axios.put(`users/${currentUser._id}`, { ...inputs });
      dispatch(updateSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(updateFailure());
    }
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="info-form">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="info-input"
            placeholder="Username"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="info-input"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="info-input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div>
          Profile image:
          {imagePercent > 0 ? (
            "Uploading:" + imagePercent + "%"
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImg(e.target.files[0])}
            />
          )}
        </div>

        <button className="info-button" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
