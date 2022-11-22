import { Modal, useMantineTheme } from '@mantine/core';
import { FormModal, InfoInput, BtnUpDate } from './styles';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <FormModal>
        <h3>Your Infos</h3>
        <div>
            <InfoInput 
            type="text"
            placeholder='First Name'
            name='firstname'
            />
            <InfoInput 
            type="text"
            placeholder='Last Name'
            name='lasttname'
            />
        </div>
        <div>
            <InfoInput 
            type="text"
            placeholder='Works at'
            name='worksAT'
            />
        </div>
        <div>
            <InfoInput 
            type="text"
            placeholder='Lives in'
            name='livesIN'
            />
            <InfoInput 
            type="text"
            placeholder='Country'
            name='country'
            />
        </div>
        <div>
            <InfoInput 
            type="text"
            placeholder='RelationsShip Status'
            />
        </div>
        <div>
            Profile Image 
            <input 
            type='file'
            name='profileImg'
            />
            Cover Image
            <input 
            type='file'
            name='coverImg'
            />
        </div>
        <BtnUpDate>Update</BtnUpDate>
      </FormModal>
    </Modal>
  );
}

export default ProfileModal;