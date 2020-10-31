import React from 'react';
import data from './assets/data/projects.json';
import useSite from './useSite';


const SingleView = () => {
    const {projectView} = useSite();
    const lang = "EN";
    const index = projectView;

    const pr = data[index];

    if (lang === "EN"){
        data.map ( (data )  => {
            return(
            data.title = data.titleEN,
            data.description = data.descriptionEN
            )
        })
    } else {

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div style={{overflow:"hidden"}}>
                        <img src={require(`./assets/images/${pr.image}`)} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleView;