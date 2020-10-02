import axios from 'axios';


export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers : {
    Authorization: 'Client-ID W6gr_tpGtq4oCxc9B99Ti8ICJUgs3_DLE8_GNOKj1vg' 
   }
});