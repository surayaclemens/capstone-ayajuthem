import './DictionaryPage.scss';
import React from "react";

import phrasesAPI from "../../utils/apiConfig";

class DictionaryPage extends React.Component {
    state = {
    //   phraseObj: "",
      phrasesArray: []
    };
  
    // INITIAL MOUNT
    
  
    componentDidMount() {
  
    document.title="Dictionary"
  
      phrasesAPI.getAll()
        .then((response) => {
            // get all the phrases from API 
            const allPhrases = response.data;
            
            //Put all the phrases in current state
            this.setState({
            phrasesArray: allPhrases,
            });

            console.log(this.state.phrasesArray)
        })
  
        .catch((error) => console.error(error));
    }

    render(){
        return(
            <section className='phrase-list'>
                <h2 className='phrase-list__header'>Phrases</h2>
                    <div className='phrase-list__list-wrapper'>
                            {/* map through split morpheme array and for each morpheme, return a div with single morph */}
                            {this.state.phrasesArray?.map((phrase, id) => {
                                return(
                                    <div 
                                    key={id}
                                    className='phrase-list__single-phrase'>
                                        {phrase}
                                    </div>
                                )
                            })}
                    </div>
            </section>
        )
    }
}


export default DictionaryPage;
