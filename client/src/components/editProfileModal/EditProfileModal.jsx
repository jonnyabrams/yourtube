import { Modal, useMantineTheme } from '@mantine/core'
import { updateFailure, updateStart, updateSuccess } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './edit-profile-modal.css'

const EditProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme()
  const currentUser = useSelector(state => state.user.currentUser)
  const [name, setName] = useState(currentUser?.name)
  const [email, setEmail] = useState(currentUser?.email)
  const [password, setPassword] = useState(currentUser?.password)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = async (e) => {
    e.preventDefault()
    dispatch(updateStart())

    try {
      const res = await axios.put(`users/${currentUser._id}`, { name, email, password })
      dispatch(updateSuccess(res.data))
      navigate('/')
    } catch (error) {
      dispatch(updateFailure())
    }
    setModalOpened(false)
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className='info-form'>
        <h3>Your info</h3>

        <div>
          <input type="text" className="info-input" placeholder="Username" onChange={e => setName(e.target.value)} />
        </div>

        <div>
          <input type="text" className="info-input" placeholder="Email" onChange={e => setEmail(e.target.email)} />
        </div>

        <div>
          <input type="text" className="info-input" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </div>

        <div>
          Profile image:
          <input type="file" name="ProfileImage" />
        </div>

        <div>
          Cover image:
          <input type="file" name="CoverImage" />
        </div>

        <button className="info-button" onClick={handleUpdate}>Update</button>
      </form>
    </Modal>
  );
}

export default EditProfileModal
