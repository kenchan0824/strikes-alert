import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {
  IonBadge,
  IonChip,
  IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow,
} from '@ionic/react';
import { addCircleOutline, arrowBack } from 'ionicons/icons';
import './Home.css';
import OperatorCard from '../components/OperatorCard';
import { useState } from 'react';

function captialize(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const operators = [
  "Avanti West Coast",
  "C2C",
  "Chiltern Railways",
  "Cross Country",
  "East Midlands Railway",
  "Gatwick Express",
  "Govia Thameslink Railway",
  "Great Western Railway",
  "Greater Anglia",
  "Great Northern Railway",
  "London North Eastern Railway",
  "Northern Trains",
  "South Eastern",
  "South Western Railway",
  "Trans Pennine Express",
  "West Midlands Railway",
]

export default function SelectOperation() {

  const [available, setAvailable] = useState(operators)
  const [selected, setSelected] = useState(operators);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonRow className="items-center mt-4 mx-3">
          <IonIcon icon={arrowBack} className="text-2xl" />
          <h1 className="ml-4 text-xl grow">
            Rail
          </h1>
        </IonRow>
        {/* <button
          className="bg-blue-500 text-white text-base font-medium rounded-xl 
            absolute right-3 top-3 px-4 py-1">
          Save
        </button> */}
        <IonRow className="mt-5 mx-3 items-center flex-nowrap">
          <CreatableSelect
            className="grow"
            placeholder="search operators"
            isClearable
            menuShouldScrollIntoView={true}
            options={available.map((name) => {
              return { value: name, label: name }
            })}
            onInputChange={(value) => {
              return captialize(value)
            }}
            isValidNewOption={(input) => {
              return !available.some((name) =>
                name.toLowerCase().includes(input.toLowerCase())
              );
            }}
          />
        </IonRow>
        <IonRow className='mt-2 ml-2'>
          <IonChip outline={true} className="border">
            <IonLabel className="text-xs">
              Any Ops
            </IonLabel>
          </IonChip>
          <IonChip outline={true} className="border">
            <IonLabel className="text-xs">
              Select All
            </IonLabel>
          </IonChip>
          <IonChip outline={true} className="border">
            <IonLabel className="text-xs">
              Remove All
            </IonLabel>
          </IonChip>
        </IonRow>
        <IonRow className='mt-5 mx-3 pb-2'>
          <IonLabel className="text-sm ml-0">
            Selected Operators 
            (16)
          </IonLabel>
        </IonRow>
      </IonHeader>
      <IonContent>
        <section className="px-2">
          {
            selected.map((name) =>
              <OperatorCard key={name} name={name} />
            )
          }
        </section>
      </IonContent>
    </IonPage>
  );
};

