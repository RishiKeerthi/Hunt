import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const SmallHeader = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar style={{ background: "#cc4c28" }} color="primary">
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default SmallHeader;
