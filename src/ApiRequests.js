import axios from 'axios';

const ApiRequests = {

    put :   function(callback, url, args) {

        axios.put(url, args)
            .then(function (response) {
                callback(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export default ApiRequests

