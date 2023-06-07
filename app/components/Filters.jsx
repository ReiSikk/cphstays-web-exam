import React from 'react'
import SelectLocation from './SelectLocation'
import SelectRooms from './SelectRooms'
import SelectPrice from './SelectPrice'
import SelectSize from './SelectSize'
import SearchBar from './SearchBar'

function Filters(props) {
  return (
    <div className="filters-container">
    <SelectLocation  locationChanged={props.locationChanged}/>
    <SelectRooms   roomsChanged={props.roomsChanged} />
    <SelectPrice priceChanged={props.priceChanged}/>
    <SelectSize sizeChanged={props.sizeChanged}/>
    <SearchBar searchChanged={props.searchChanged}/>
    </div>
  )
}

export default Filters