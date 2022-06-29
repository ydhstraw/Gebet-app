import {IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/react';
import NavButtons from '../components/NavButtons';
import './Home.css';
import {femaleOutline, heart, maleOutline, personCircle} from 'ionicons/icons';
import {useContext, useRef, useState} from 'react';
import './Home.css';
import FriendsContext from '../components/FriendsContext';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

const shuffle = (DATA: { id: string; name: string; Description: string; gender: string; image: string; }[]) => [...DATA].sort(() => Math.random() - 0.5);

export const Members = [
  { id: '1', name: 'Yudhistira A.W', Description: "Good Introvert guy", gender: "Male", image: "./assets/images/ydhstraw.jpg" }
  , { id: '2', name: 'Shionne Imeris', Description: "Kind Renan Girl", gender: "Female", image: "./assets/images/shionne.jpg" }
  , { id: '3', name: 'Rinwell', Description: "Cute Mage from Dahnan", gender: "Female", image: "./assets/images/rinwell.jpg" }
  , { id: '4', name: 'Hirasawa Yui', Description: "I love Giita", gender: "Female", image: "./assets/images/yui.png" }
  , { id: '5', name: 'Inugami Korone', Description: "Retro Gamer", gender: "Female", image: "./assets/images/korone.jpg" }
  , { id: '6', name: 'Yuffie Kisaragi', Description: "Cute Ninja", gender: "Female", image: "./assets/images/yuffie.jpg" }
  , { id: '7', name: 'Roboco', Description: "Robot from future", gender: "Female", image: "./assets/images/roboco.jpg" }
  , { id: '8', name: 'Alphen', Description: "Humble Dahnan Guy", gender: "Male", image: "./assets/images/alphen.jpg" }
  , { id: '9', name: 'Kuriyama Mirai', Description: "Blood Manipulator", gender: "Female", image: "./assets/images/mirai.jpg" }
  , { id: '10', name: 'Higuchi Madoka', Description: "Idol", gender: "Female", image: "./assets/images/madoka.png" }
  , { id: '11', name: 'Shishiro Botan', Description: "Lion", gender: "Female", image: "./assets/images/botan.jpg" }
  , { id: '12', name: 'Gawr Gura', Description: "Shark", gender: "Female", image: "./assets/images/gura.jpg" }
  , { id: '13', name: 'Kagamihara Nadeshiko', Description: "I love Camping", gender: "Female", image: "./assets/images/nadeshiko.jpg" }
  , { id: '14', name: 'Nishimiya Shouko', Description: "...", gender: "Female", image: "./assets/images/shouko.jpg" }
]

const newList = shuffle(Members);

const Home: React.FC = () => {
  
  const friendCtx = useContext(FriendsContext);
    let exist: any[] = [];
    const [showLoad, setShowLoading] = useState(false)
    friendCtx.friends.map(target => exist.push(target.id))

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const addFriend = (id: string, nama: string, Description: string, gender: string, image:string) => {
      slidingOptionsRef.current?.closeOpened();
      friendCtx.addFriend(id, nama, Description, gender,image)
      Members.forEach((value,index)=>{
        if(value.id===id) Members.splice(index,1);
      });
      console.log(friendCtx.friends);
      setShowLoading(true)
  };
  setTimeout(() => {
    setShowLoading(false);
  }, 1500)

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
          <IonTitle>Bosen Jomblo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar,]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {newList.slice(0,10).map((item) => (
                  <SwiperSlide key={item.id}>
                    <IonCard class='card '>
                      <IonAvatar class='avatar-highlight'>
                        <img src={item.image}/>
                      </IonAvatar>
                      
                      <IonCardContent class='text-highlight'>
                        {item.name}
                      </IonCardContent>
                    </IonCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </IonCol>
        </IonRow>
        <IonRow >
          <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
            <IonList class='border-radius'>
            {Members.map(target => (
              
                <IonItemSliding key={target.id} ref={slidingOptionsRef}>
                  <IonItemOptions side="end">
                    <IonItemOption color="danger" disabled={exist.indexOf(target.id) > -1} routerLink="/target-pasangan" onClick={() => addFriend(target.id, target.name, target.Description, target.gender,target.image)}>
                      <IonIcon slot="icon-only" icon={heart}></IonIcon>
                    </IonItemOption>
                    
                  </IonItemOptions>
                  <IonItem lines="full">
                    <IonAvatar slot="start" className='avatar'>
                      <img src={target.image}/>
                    </IonAvatar>
                    <IonLabel>
                      <h2>{target.name}</h2>
                      <h3>{target.Description}</h3>
                      <p>{target.gender == 'Female' ? <IonIcon class='gender' icon={femaleOutline} /> : <IonIcon class='gender' icon={maleOutline} />}
                      {target.gender}</p>
                    </IonLabel>
                  </IonItem>
                </IonItemSliding>
  
              
            ))}
            <IonLoading
                      isOpen={showLoad}
                      onDidDismiss={() => setShowLoading(false)}
                      message={'Please wait...'}
                      duration={1500}
                    />
            </IonList>
            
          </IonCol>
        </IonRow>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
