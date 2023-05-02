import {useEffect , useState} from 'react';

function User() {
    const [name,setName] = useState('Nithin');

    const updateName = (e) => {
        const {value} = e.target;
        console.log(value);
        setName(value);
    }

    useEffect(() => {
        console.log('useEffect update name',name);
        return () => {
            console.log('component willUnmount useEffect return fn');
        }
    }, [name])

    useEffect (() => {
        console.log('componentDidMount');
        document.title = 'Users'
        const URL = 'https://jsonplaceholder.typicode.com/users';
    })




}