import { IonActionSheet, IonAvatar, IonButton, IonButtons, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import NavButtons from '../components/NavButtons';

import {closeOutline, femaleOutline, maleOutline, trash, close, personCircle} from 'ionicons/icons';
import { useContext, useRef, useState } from 'react';
import FriendsContext from '../components/FriendsContext';
import { Members } from './Home';


const Target_Pasangan: React.FC = () => {
  const friendsCtx = useContext(FriendsContext);
  const [actionSheet, setShowActionSheet] = useState(false);
  const [ids, setId] = useState<string>();

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const deleteFriend = (id: string) => {
    slidingOptionsRef.current?.closeOpened();
    friendsCtx.friends.forEach(element => {
      Members.push({
        id: element.id,
        name: element.name,
        Description: element.description,
        gender: element.gender,
        image: element.image
      })
    });
    friendsCtx.deleteFriend(id);
  }
  const actionSheetHandler = (id: string) => {
    setShowActionSheet(true);
    setId(id)
}

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='primary'>
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
          <IonButtons slot='end'>
            <IonButton routerLink={"/profile"} routerDirection="none">
              <IonIcon slot='icon-only' icon={personCircle}/>
            </IonButton>
          </IonButtons>
          <IonTitle>Target gebetan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
            <IonList class='border-radius'>
            {friendsCtx.friends.length != 0?
              friendsCtx.friends.map(target => (
                  <IonItemSliding key={target.id} ref={slidingOptionsRef}>
                  
                    <IonItemOptions side="end">
                      <IonItemOption color="danger" onClick={() => actionSheetHandler(target.id)}>
                        <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
                      </IonItemOption>
                      
                    </IonItemOptions>
                    <IonItem lines="full">
                      <IonAvatar slot="start" className='avatar'>
                        <img  src={target.image}/>
                      </IonAvatar>
                      <IonLabel>
                        <h2 className='nama'>{target.name}</h2>
                        <h3>{target.description}</h3>
                        <p>{target.gender == 'Laki-laki' ? <IonIcon class='gender' icon={maleOutline} /> : <IonIcon class='gender' icon={femaleOutline} />}{target.gender}</p>
                      </IonLabel>
                    </IonItem>
                  </IonItemSliding>

                  
              )) :
              
              <IonGrid >
                <IonCardHeader class='center'>
                  <IonCardTitle>Anda masih Jones??</IonCardTitle>
                  <IonButton routerLink="/home" expand="block">Cari gebetan</IonButton>
                </IonCardHeader>
                
                

              </IonGrid>
            }
            {ids &&
                        <IonActionSheet isOpen={actionSheet} onDidDismiss={() => setShowActionSheet(false)}
                          header="Yakin gak gebet dia lagi ?"
                          buttons={[{
                            icon: trash,
                            text: "Yakin, hapus dari daftar",
                            handler: () => deleteFriend(ids)
                            },
                            {icon: close, text: "Gak yakin, kembali", handler: () => {console.log('cancel clicked');} }
                        ]} />
                      }
            </IonList>
          </IonCol>
        </IonRow>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Target_Pasangan;
