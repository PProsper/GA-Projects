

class extends App Component {
  constructor(){
    super();
    this.state{

    }
  }

  axios.get('https://tracker-ag.firebaseio.com/groups.json').then((response){
    console.log(response.data)
  }
// axios.all([
//     axios.get('https://api.github.com/users/codeheaven-io');
//     axios.get('https://api.github.com/users/codeheaven-io/repos')
//   ])
//   .then(axios.spread(function (userResponse, reposResponse) {
//     //... but this callback will be executed only when both requests are complete.
//     console.log('User', userResponse.data);
//     console.log('Repositories', reposResponse.data);
//   }));
