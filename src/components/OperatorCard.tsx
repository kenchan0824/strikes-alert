import { IonChip, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { close } from 'ionicons/icons';

export default function OperatorCard({ name }) {

  console.log('name', name);

  return (
    <IonChip>
      <IonLabel className="text-sm">
        {name}
      </IonLabel>
      <IonIcon icon={close} />
    </IonChip>    
  );

}
