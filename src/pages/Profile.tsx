import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import NavButtons from '../components/NavButtons';
import './Home.css';
import {logoInstagram, logoTwitter, logoFacebook, logoLinkedin, logoGithub, logoYoutube, musicalNote, personCircle} from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
        <IonHeader className='ion-no-border'>
            <IonToolbar color='primary'>
                <IonButtons slot="start">
                    <NavButtons/>
                </IonButtons>
                <IonButtons slot='end'>
                    <IonButton  routerLink={"/profile"} routerDirection="none">
                        <IonIcon slot='icon-only' icon={personCircle}/>
                    </IonButton>
                </IonButtons>
                <IonTitle>Profil</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className='ion-padding' id='bg'>
            <IonRow>
                <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                    <IonCard class='border-radius'>
                        
                        <img className='avatar-profile' src='./assets/images/ydhstraw.jpg' />
                        <IonCardHeader class='text-profile'>
                            <IonCardTitle>Yudhistira Aremaputra Wardhana</IonCardTitle>
                            
                            <IonCardSubtitle>00000036572</IonCardSubtitle>
                            <p>@ydhstraw</p>
                            
                        </IonCardHeader>
                        <IonCardContent>
                            <IonButton id='instagram' href='https://www.instagram.com/ydhstraw/' target="_blank" expand="block"><IonIcon className='button-icon' icon={logoInstagram}/>Instagram</IonButton>
                            <IonButton id='twitter' href='https://twitter.com/ydhstraw' target="_blank" expand="block"><IonIcon className='button-icon' icon={logoTwitter}/>Twitter</IonButton>
                            <IonButton id='facebook' href='https://www.facebook.com/ydhstraw/' target="_blank" expand="block"><IonIcon className='button-icon' icon={logoFacebook}/>Facebook</IonButton>
                            <IonButton id='linkedin' href='https://www.linkedin.com/in/ydhstraw/' target="_blank" expand="block"><IonIcon className='button-icon' icon={logoLinkedin}/>LinkedIn</IonButton>
                            <IonButton id='github' href='https://github.com/ydhstraw' target="_blank" expand="block"><IonIcon className='button-icon' icon={logoGithub}/>GitHub</IonButton>
                            <IonButton id='youtube' href='https://www.youtube.com/channel/UC4_Eo815ybw_896rd4wVSqA' target="_blank" expand="block"><IonIcon className='button-icon' icon={logoYoutube}/>YouTube</IonButton>
                            <IonButton id='spotify' href='https://open.spotify.com/user/yudhistira.wardhana?si=MDEXjWX6RzOF_Ut8o394sg' target="_blank" expand="block"><IonIcon className='button-icon' icon={musicalNote}/>Spotify</IonButton>
                            
                            {/* <IonButton expand="block">A button</IonButton> */}
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
            
        </IonContent>
    </IonPage>
  );
};

export default Profile;
