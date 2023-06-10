import { IonChip, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { close } from 'ionicons/icons';

export default function OperatorCard({ name }) {

  return (
    <IonChip>
      <IonLabel className="text-xs">
        {name}
      </IonLabel>
      <IonIcon icon={close} />
    </IonChip>    
  );

}
