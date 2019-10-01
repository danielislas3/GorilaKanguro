import React, { Component } from 'react'
import CSVReader from 'react-csv-reader'

export default function Reader() {
  return (
    <div>
       <CSVReader
        cssClass="csv-reader-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={this.handleForce}
        onError={this.handleDarkSideForce}
        inputId="ObiWan"
        inputStyle={{color: 'red'}}
      />
    </div>
  )
}
 