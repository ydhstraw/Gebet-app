import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
    IonToggle,
  } from "@ionic/react";

  import { moon } from "ionicons/icons";
  
  const Menu = () => {
    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
      };
    return (
        <IonMenu side="start" contentId="main" type="push" >
        
            <IonHeader className='ion-no-border'>
                <IonToolbar color="secondary">
                <IonTitle>Gebet App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id="bg-menu" color="light">
                <IonList>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/home"} routerDirection="none">
                            {/* <IonIcon class="menu-icons" icon={homeOutline}/> */}
                            <IonLabel>Daftar Calon Pasangan</IonLabel>
                        </IonItem>
                        <IonItem button routerLink={"/target-pasangan"} routerDirection="none">
                            {/* <IonIcon class="menu-icons" icon={sunnyOutline}/> */}
                            <IonLabel>Target Pasangan</IonLabel>
                        </IonItem>
                        <IonItem button routerLink={"/profile"} routerDirection="none">
                            {/* <IonIcon class="menu-icons" icon={helpCircleOutline}/> */}
                            <IonLabel>Profil</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Dark Mode</IonLabel>
                            <IonIcon icon={moon} className="component-icon component-icon-dark" />
                            <IonToggle value="mushrooms" onIonChange={toggleDarkModeHandler} />
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
  };

export default Menu;