import React, { useState, useEffect } from "react";
import CardSection from "./CardSection";
import axios from "axios";
import { Uri, headersApp } from "../helpers/Uri";
import { Skeleton } from "antd";

//import ProviderService from '../model/ProviderService'

export default function Index() {
  //hook par los proveedores
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        Uri("provider_services", { with: "user" }),
        headersApp
      );
      if (res.status !== 200) return "Error: " + res.status;
      setProviders(res.data.data);
      console.log(res.data.data)
    };

    fetchData();
  
  }, []);

  return (
    <div>
      <h1>Proveedores</h1>

      {providers.length ? (
        providers.map(prov => (
          <CardSection
            key={prov.id}
            src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2017/10/11100711/DHLlogo1200.jpg"
            name={prov.user.name}
            desc={prov.user.email}
            to={prov.user.id.toString()}
            rank={prov.user.ranking}
            data={prov}
          />
        ))
        
      ) : (
        <Skeleton active/>
      )}

      {/* DHL */}
      <CardSection
        src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2017/10/11100711/DHLlogo1200.jpg"
        name="DHL"
        desc="descripcion"
        to="dhl"
      />

      {/* FEDEX */}
      <CardSection
        src="https://graffica.info/wp-content/uploads/2017/06/FedEXCabEnfocado.jpg"
        name="FEDEX"
        desc="descripcion fedex"
        to="fedex"
      />

      {/* MERQ */}
      <CardSection
        src="http://merq.com.mx/wp-content/uploads/2016/09/LOGO.png"
        name="MERQ"
        desc="descripcion merq"
        to="merq"
      />
    </div>
  );
}
