import questionsData from './questionsData';

export function genRandom(min, max) { 
    /** DESCRIPTION: generates a random integer in the range [min, max] 
     * 
     * @param {Number} min
     * @param {Number} max 
     * 
     * Citation: This function is very generic, and I've used it in a low
     * of places, so it might set off a plagiarism check.
    */

    if(min === max){
        return min
    }

    if(min > max){
        throw Error(`Bad input to RNG. Min ${min} was greater than max ${max}`)
    }

    const num = Math.floor(Math.random() * (max+1-min) + min)
    return num
}
  

export function randomizeAnswerOrder(questions){
    /** DESCRIPTION: randomizes the order of answers in each question in an array of questions
     * 
     * @param {Array} questions: Array of questions. Each question has a prompt and an array of answers.
     */

    questions.forEach(q => {
        for(let i = 0; i < q.answers.length; i++){
            const newIndex = genRandom(0, 3)
            if(newIndex === i)
                continue
            [q.answers[i], q.answers[newIndex]] = [q.answers[newIndex], q.answers[i]]
        }
    })
    return questions;
}

export function getRandomIndex(arr, memo={}){
    /** DESCRIPTION: selects a random index from an array that is not a truthy key
     * in a copy of memo. Once i is selected, sets memoCpy[i] = true.
     * 
     * @param {Array} arr
     * @param {Object} memo: A dictionary where each key corresponds to an index
     * on the array. If memo[index] is truthy, then index will not be returned.
     * 
     * @return {Array}: contains the updated copy of memo and the selected index
     */

    let i = genRandom(0, arr.length - 1)
    let memoCpy = {...memo}

    if(Object.keys(memo).length >= arr.length - 1){
    // There is a key in memo for every question in questions
        console.log("All questions have been asked. Restarting");
        memoCpy = {}
    }


    while(true){
        if(!memoCpy[i]){
            // unused question found
            memoCpy[i] = true
            return [memoCpy, i]
        }

        i++

        if(i >= arr.length){
            // reached end of array, start over at 0
            i = 0
        }
    }
}

const questions = randomizeAnswerOrder(questionsData);
const [memo, index] = getRandomIndex(questions);
export const randomizedQuestions = { questions, index, memo };