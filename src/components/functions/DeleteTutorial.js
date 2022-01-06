import TutorialDataService from '../../services/tutorial.service'


export const DeleteTutorial = (key,refreshList) => {
    TutorialDataService.delete(key)
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }
 