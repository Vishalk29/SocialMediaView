import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.css'
function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            size='55%'
            overlayBlur={3}
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            {/* Modal content */}
            <form action="" className="infoForm">
                <h3>Your Info</h3>
                <div>
                    <input type="text" className='infoInput' name='firstName' placeholder='First Name' />
                    <input type="text" className='infoInput' name='lastName' placeholder='last Name' />
                </div>
                <div>
                    <input type="text" className='infoInput' name='workAT' placeholder='WorK AT' />
                </div>
                <div>
                    <input type="text" className='infoInput' name='LiveIn' placeholder='Lives in' />
                    <input type="text" className='infoInput' name='country' placeholder='Country' />
                </div>
                <div>
                    <input type="text" className='infoInput' placeholder='Relationship status' />
                </div>

                <div>
                    Profile Image
                    <input type="file" name="ProfileImage" />
                    Cover Image
                    <input type="file" name="CoverImageImage" />
                </div>
                <button className='button infoButton'>Update</button>
            </form>
        </Modal>
    );
}
export default ProfileModal;