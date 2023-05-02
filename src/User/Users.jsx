import {useEffect , useState} from 'react';
import axios from 'axios';

function Users() {
    const [name,setName] = useState('Nithin');
    const [id, setid] = useState('1');

    const updateName = (e) => {
        const {value} = e.target;
        console.log(value);
        setName(value);
    }

    // useEffect (() => {
    //     console.log('componentDidMount');
    //     document.title = 'Users'
    //     const URL = 'https://jsonplaceholder.typicode.com/users';
    //     const someFunction = null;
    //     const getData = async () => {
    //         try{
    //             const userData = await axios.get(URL);
    //             console.log(userData.data);
    //         } catch (error) {
    //             console.log('catch block', error.message);
    //         }
    //     }

    //     getData();
    // },[]);

    useEffect(() => {
        console.log('useEffect update name',name)   
    }, [name]);


    useEffect(() => {
        console.log(id);
        (async() => {
            console.log('useEffect update id',id);
            const URL = 'https://jsonplaceholder.typicode.com/users/';
            const data = (await axios.get(URL+id)).data;
            console.log('userData',data);
        })()
    }, [id])

return (
    <>
        <input type='text' placeholder='Enter Name' onChange={updateName} />
        <input type="number" min='1' max="10" placeholder='enter id' onChange={e=>setid(e.target.value)} />
        <div>Hello {name}</div>
        <button>Show Greeting</button>
    </>
)


}


export default Users;