import Select from 'react-select'
import {
  IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar
} from '@ionic/react';
import { addCircleOutline, arrowBack } from 'ionicons/icons';
import './Home.css';

const options = [
  { value: 'Avanti West Coast', label: 'Avanti West Coast' },
  { value: 'C2C', label: 'C2C' },
  { value: 'Chiltern Railways', label: 'Chiltern Railways' },
  { value: 'Cross Country', label: 'Cross Country' },
  { value: 'East Midlands Railway', label: 'East Midlands Railway' },
  { value: 'Gatwick Express', label: 'Gatwick Express' },
  { value: 'Govia Thameslink Railway', label: 'Govia Thameslink Railway' },
  { value: 'Great Western Railway', label: 'Great Western Railway' },
  { value: 'Greater Anglia', label: 'Greater Anglia' },
  { value: 'Great Northern Railway', label: 'Great Northern Railway' },
  { value: 'London North Eastern Railway', label: 'London North Eastern Railway' },
  { value: 'Northern Trains', label: 'Northern Trains' },
  { value: 'South Eastern', label: 'South Eastern' },
  { value: 'South Western Railway', label: 'South Western Railway' },
  { value: 'Trans Pennine Express', label: 'Trans Pennine Express' },
  { value: 'West Midlands Railway', label: 'West Midlands Railway' },
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border border-b py-4 px-4">
        <IonRow className="items-center">
          <IonIcon icon={arrowBack} className="text-xl"/>
          <h1 className="ml-4 text-xl">
            Rail
          </h1>
        </IonRow>
        <IonRow className="mt-6 items-center">
          <Select
            options={options} 
            isClearable={false}
            placeholder="Select operators "
            className="grow"
          />
          <IonIcon icon={addCircleOutline} 
            className="ml-4 text-3xl"
          />
        </IonRow>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Home;
