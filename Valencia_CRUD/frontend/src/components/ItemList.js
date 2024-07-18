import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get(`http://localhost:8000/api/items/`);
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error)
        }
    };
   return (
    <div>
        
        <h1>Items</h1>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                  {item.first_name}: {item.middle_name} : {item.last_name} : {item.contact_number} {item.email} : {item.address} : {item.sex} : {item.birthday} : {item.place_of_birth} : {item.citizenship} : {item.blood_type} : {item.religion} : {item.civil_status} : {item.occupation} : {item.height} : {item.weight} : {item.father_surname} {item.father_middle} : {item.mother_surname} : {item.mother_first} : {item.mother_middle} : {item.elementary} : {item.secondary} : {item.college} : {item.vocational_course} : {item.graduate_studies} : {item.company_name} : {item.sss_number} : {item.name_of_children}
                 <button onClick={()=> onEdit(item)}>Edit</button>
                 <button onClick={()=> onDelete(item.id)}>Delete</button>

                </li>
            ))}
        </ul>
    </div>
   );
    
};

export default ItemList;