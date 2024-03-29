import React, { useState } from "react"
import Layout from "../components/Layout"
import Person from "../components/peoplePresentations/Person"
import PersonCard from "../components/peoplePresentations/PersonCard"
import PersonThumbnail from "../components/personThumbnail/PersonThumbnail"
import * as img from "../images/"
import Contact from "../components/contact/Contact"
import "../styles/index.scss"

const OmOss = () => {
  const [selectedPerson, setSelectedPerson] = useState("Anki Jansson")
  const [showPerson, setShowPerson] = useState("hide-person")

  const handlePersonChange = e => {
    const { name } = e.target
    setSelectedPerson(name)
  }

  return (
    <Layout>
      <div className="om-oss__container">
        <header className="main-header">
          <h1 className="main-header__h1">
            Vilka är vi bakom Förskoleupproret?
          </h1>
          <img
            className="main-header__hero-img"
            src={img.gruppbild}
            alt="gruppbild"
          ></img>
          <p className="main-header__intro-paragraph main-p">
            Förskoleupproret drivs ideellt av sex engagerade pedagoger i
            förskolan. Allt arbete med Förskoleupproret sker under kvällar,
            helger och efter arbetstid. Ledningsgruppen har nästan daglig
            kontakt och diskuterar kontinuerligt Förskoleupprorets
            utvecklingsområden, nästa steg och eventuella kampanj.
          </p>
        </header>
        <section className="person-thumbnails__container">
          <PersonThumbnail
            name="Anki Jansson"
            active={selectedPerson === "Anki Jansson"}
            img={img.anki}
            handlePersonChange={handlePersonChange}
          />
          <PersonThumbnail
            name="Katrin Nörthen"
            active={selectedPerson === "Katrin Nörthen"}
            img={img.katrin}
            handlePersonChange={handlePersonChange}
          />
          <PersonThumbnail
            name="Diana Hall"
            active={selectedPerson === "Diana Hall"}
            img={img.diana}
            handlePersonChange={handlePersonChange}
          />
          <PersonThumbnail
            name="Annette Nord"
            active={selectedPerson === "Annette Nord"}
            img={img.annette}
            handlePersonChange={handlePersonChange}
          />
          <PersonThumbnail
            name="Monica Lindström"
            active={selectedPerson === "Monica Lindström"}
            img={img.monica}
            handlePersonChange={handlePersonChange}
          />
          <PersonThumbnail
            name="Annica Järking"
            active={selectedPerson === "Annica Järking"}
            img={img.annica}
            handlePersonChange={handlePersonChange}
          />
        </section>

        <PersonCard personName={selectedPerson} setShowPerson={setShowPerson} />
        <Person
          personName={selectedPerson}
          setShowPerson={setShowPerson}
          showPerson={showPerson}
        />
        <Contact />
      </div>
    </Layout>
  )
}

export default OmOss
