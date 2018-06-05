import React, { Component } from 'react';
import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
import './App.css';

export default () => {
    return (
      <section className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
          theme={{
            primaryColor: '#FF3A4E'
          }}
        >

        <nav className="nav">
          <div className="title"> Airbnb - Deivbid </div>
          <DataSearch
            ComponentId="searchSensor"
            dataField="name"
            autosuggest={false}
            placeholder="Search by house names"
            iconPosition="left"
            className="search"
            highlight={true}
            />
        </nav>

          Hello from ReactiveSearch
        </ReactiveBase>  
      </section>
    );
}


