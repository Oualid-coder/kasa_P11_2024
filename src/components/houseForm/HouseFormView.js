//import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFichLogement from "../../datas/logement.json";
import Tag from "./Tag";
import Collapse from "../collapse/Collapse";
import Carrousel from "./Carrousel";
import Rate from "./Rate";
import Host from "./Host";

const HouseFormView = () => {
  /* Récupère la fiche spécifique à l'id */
  const { id } = useParams();

  const houseForm = DataFichLogement.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = houseForm?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Équipements */
  const equipements = houseForm?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {houseForm ? (
        <div className="Fiche-container">
          <Carrousel slides={houseForm?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{houseForm?.title}</span>
                  <span className="endroit-logement">
                    {houseForm?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={houseForm?.host.name}
                    picture={houseForm?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate score={houseForm.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-centent">
            <div className="description-centent__description">
              <Collapse
                title="Description"
                content={houseForm?.description}
              />
            </div>
            <div className="description-centent__equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default HouseFormView;
