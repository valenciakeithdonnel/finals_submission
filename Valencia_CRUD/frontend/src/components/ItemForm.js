import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) =>{
    const [first_name, setfirst_name] = useState('');
    const [middle_name, setmiddle_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [contact_number, setcontact_number] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [sex, setsex] = useState('');
    const [birthday, setbirthday] = useState('');
    const [place_of_birth, setplace_of_birth] = useState('');
    const [citizenship, setcitizenship] = useState('');
    const [blood_type, setblood_type] = useState('');
    const [religion, setreligion] = useState('');
    const [civil_status, setcivil_status] = useState('');
    const [occupation, setoccupation] = useState('');
    const [height, setheight] = useState('');
    const [weight, setweight] = useState('');
    const [father_surname, setfather_surname] = useState('');
    const [father_middle, setfather_middle] = useState('');
    const [mother_surname, setmother_surname] = useState('');
    const [mother_first, setmother_first    ] = useState('');
    const [mother_middle, setmother_middle] = useState('');
    const [elementary, setelementary] = useState('');
    const [secondary, setsecondary] = useState('');
    const [college, setcollege] = useState('');
    const [vocational_course, setvocational_course] = useState('');
    const [graduate_studies, setgraduate_studies] = useState('');
    const [company_name, setcompany_name] = useState('');   
    const [sss_number, setsss_number] = useState('');
    const [name_of_children, setname_of_children] = useState('');


    useEffect(() => {
        if (item) {
            setfirst_name(item.first_name);
            setmiddle_name(item.middle_name);
            setlast_name(item.last_name);
            setcontact_number(item.contact_number);
            setemail(item.email);
            setaddress(item.address);
            setsex(item.sex);
            setbirthday(item.birthday);
            setplace_of_birth(item.place_of_birth);
            setcitizenship(item.citizenship);
            setblood_type(item.blood_type);
            setreligion(item.religion);
            setcivil_status(item.civil_status);
            setoccupation(item.occupation);
            setheight(item.height);
            setweight(item.weight);
            setfather_surname(item.father_surname);
            setfather_middle(item.father_middle);
            setmother_surname(item.mother_surname);
            setmother_first(item.mother_first);
            setmother_middle(item.mother_middle);
            setelementary(item.elementary);
            setsecondary(item.secondary);
            setcollege(item.college);
            setvocational_course(item.vocational_course);
            setgraduate_studies(item.graduate_studies);
            setcompany_name(item.company_name);
            setsss_number(item.sss_number);
            setname_of_children(item.name_of_children);


        }
    }, [item]);
    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, contact_number, email, address, sex, birthday, place_of_birth, citizenship, blood_type, religion, civil_status, occupation, height, weight, father_surname, father_middle, mother_surname, mother_first, mother_middle, elementary, secondary, college, vocational_course, graduate_studies, company_name, sss_number, name_of_children};
        try {
            if (item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post(`http://localhost:8000/api/items/`, data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
        <h1>PERSONAL FORM</h1>
            <div>
                <label>First Name: </label>
                <input type='text' value={first_name} onChange={(e) => setfirst_name(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name: </label>
                <input type='text' value={middle_name} onChange={(e) => setmiddle_name(e.target.value)}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' value={last_name} onChange={(e) => setlast_name(e.target.value)}/>
            </div>
            <div>
                <label>Contact Number: </label>
                <input type='text' value={contact_number} onChange={(e) => setcontact_number(e.target.value)}/>
            </div>
            <div>
                <label>E-mail Address: </label>
                <input type='text' value={email} onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div>
                <label>Address: </label>
                <input type='text' value={address} onChange={(e) => setaddress(e.target.value)}/>
            </div>
            <div>
                <label>Sex: </label>
                <input type='text' value={sex} onChange={(e) => setsex(e.target.value)}/>
            </div>
            <div>
                <label>Birthday: </label>
                <input type='text' value={birthday} onChange={(e) => setbirthday(e.target.value)}/>
            </div>
            <div>
                <label>Place of Birth: </label>
                <input type='text' value={place_of_birth} onChange={(e) => setplace_of_birth(e.target.value)}/>
            </div>
            <div>
                <label>Citizenship: </label>
                <input type='text' value={citizenship} onChange={(e) => setcitizenship(e.target.value)}/>
            </div>
            <div>
                <label>Blood Type: </label>
                <input type='text' value={blood_type} onChange={(e) => setblood_type(e.target.value)}/>
            </div>
            <div>
                <label>Religion: </label>
                <input type='text' value={religion} onChange={(e) => setreligion(e.target.value)}/>
            </div>
            <div>
                <label>Civil Status: </label>
                <input type='text' value={civil_status} onChange={(e) => setcivil_status(e.target.value)}/>
            </div>
            <div>
                <label>Occupation: </label>
                <input type='text' value={occupation} onChange={(e) => setoccupation(e.target.value)}/>
            </div>
            <div>
                <label>Height: </label>
                <input type='text' value={height} onChange={(e) => setheight(e.target.value)}/>
            </div>
            <div>
                <label>Weight: </label>
                <input type='text' value={weight} onChange={(e) => setweight(e.target.value)}/>
            </div>
            <div>
                <label>Father's Surname: </label>
                <input type='text' value={father_surname} onChange={(e) => setfather_surname(e.target.value)}/>
            </div>
            <div>
                <label>Father's Middle Name: </label>
                <input type='text' value={father_middle} onChange={(e) => setfather_middle(e.target.value)}/>
            </div>
            <div>
                <label>Mother's Surname: </label>
                <input type='text' value={mother_surname} onChange={(e) => setmother_surname(e.target.value)}/>
            </div>

            <div>
                <label>Mother's First Name: </label>
                <input type='text' value={mother_first} onChange={(e) => setmother_first(e.target.value)}/>
            </div>

            <div>
                <label>Mother's Middle Name: </label>
                <input type='text' value={mother_middle} onChange={(e) => setmother_middle(e.target.value)}/>
            </div>

            <div>
                <label>Elementary: </label>
                <input type='text' value={elementary} onChange={(e) => setelementary(e.target.value)}/>
            </div>

            <div>
                <label>Secondary: </label>
                <input type='text' value={secondary} onChange={(e) => setsecondary(e.target.value)}/>
            </div>

            <div>
                <label>College: </label>
                <input type='text' value={college} onChange={(e) => setcollege(e.target.value)}/>
            </div>

            <div>
                <label>Vocational Course: </label>
                <input type='text' value={vocational_course} onChange={(e) => setvocational_course(e.target.value)}/>
            </div>

            <div>
                <label>Graduate Studies: </label>
                <input type='text' value={graduate_studies} onChange={(e) => setgraduate_studies(e.target.value)}/>
            </div>

            <div>
                <label>Company Name: </label>
                <input type='text' value={company_name} onChange={(e) => setcompany_name(e.target.value)}/>
            </div>

            <div>
                <label>SSS Number: </label>
                <input type='text' value={sss_number} onChange={(e) => setsss_number(e.target.value)}/>
            </div>

            <div>
                <label>Name of Children: </label>
                <input type='text' value={name_of_children} onChange={(e) => setname_of_children(e.target.value)}/>
            </div>











            <button type='submit'>Submit</button>
        </form>

    );

}; 
export default ItemForm;