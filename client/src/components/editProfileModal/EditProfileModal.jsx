import { Modal, useMantineTheme } from '@mantine/core'
import './edit-profile-modal.css'

const EditProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();

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
          <input type="text" className="info-input" name="Username" placeholder="Username" />
        </div>

        <div>
          <input type="text" className="info-input" name="City" placeholder="City" />
        </div>

        <div>
          <input type="text" className="info-input" name="From" placeholder="From" />
        </div>

        <div>
          <input type="text" className="info-input" name="Relationship" placeholder="Relationship status" />
        </div>

        <div>
          Profile image:
          <input type="file" name="ProfileImage" />
        </div>

        <div>
          Cover image:
          <input type="file" name="CoverImage" />
        </div>

        <button className="info-button">Update</button>
      </form>
    </Modal>
  );
}

export default EditProfileModal
