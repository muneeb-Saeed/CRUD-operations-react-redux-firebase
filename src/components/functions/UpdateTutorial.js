import TutorialDataService from '../../services/tutorial.service'

export const UpdateTutorial=(title,description,key) => new Promise((resolve,reject)=> {
    const data = {
      title,
      description
    };

    TutorialDataService.update(key, data)
      .then((res) => {
        resolve(res)
      })
      .catch((e) => {
        reject(e)  
       });
  })