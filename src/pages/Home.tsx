import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [ description, setDescription ]  = useState<string>("Small text")
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonItem>
            <IonLabel position="stacked">Caracteriticas</IonLabel>
            <IonTextarea 
              className="inputs"
              placeholder={description}
              autoGrow={true}
              maxlength={400}     
              value={description}
              rows={6} cols={20}
              onIonChange={e => setDescription(e.detail.value!)}>
            </IonTextarea>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
