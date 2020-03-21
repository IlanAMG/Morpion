import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const inital_state = ['', '', '', '', '', '', '', '', '']

  const [tableau, setTableau] = useState(inital_state)
  const [tour, setTour] = useState([])
  const [mode, setMode] = useState('solo')
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)

  const handleSolo = () => {
    setMode('solo')
    setTableau(inital_state)
    setTour([])
    setScoreX(0)
    setScoreO(0)
  }

  const handleMulti = () => {
    setMode('Contre IA')
    setTableau(inital_state)
    setTour([])
    setScoreX(0)
    setScoreO(0)
  }

  const handleClick = (key) => {
    const copyTableau = [...tableau]
    const copyTour = [...tour]
    if (tableau[key] === '') {

      // SOLO
      if (mode === 'solo') {
        if (copyTour.length === 2) {
          copyTour.shift()
        }

        if (copyTour[0] === 'o') {
          copyTour[1] = 'x'
          copyTableau[key] = 'x'
        }

        if (copyTour[0] === 'x') {
          copyTour[1] = 'o'
          copyTableau[key] = 'o'
        }

        if (copyTour.length === 0) {
          copyTour[0] = 'x'
          copyTableau[key] = 'x'
        }
      }

      setTour(copyTour)
      setTableau(copyTableau)

      // CONTRE IA
      if (mode === 'Contre IA') {
        let nbSymbole = 0
        const random = Math.floor(Math.random() * (4 - 1 + 1)) + 1
        copyTableau.map(symbole => (nbSymbole += symbole.length))
        copyTableau[key] = 'x'

        // PREMIER TOUR
        if (nbSymbole === 0) {
          if (copyTableau[4] !== 'x') {
            copyTableau[4] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[4] === 'x') {
            if (random === 1) {
              copyTableau[0] = 'o'
              return setTableau(copyTableau)

            }
            if (random === 2) {
              copyTableau[6] = 'o'
              return setTableau(copyTableau)
            }
            if (random === 3) {
              copyTableau[5] = 'o'
              return setTableau(copyTableau)
            }
            if (random === 4) {
              copyTableau[8] = 'o'
              return setTableau(copyTableau)
            }
          }
        }

        // A PARTIR DU DEUXIEME TOUR AVEC X AU CENTRE

        const attaque = () => {
          //attaque ligne
          if (copyTableau[0] === 'o' && copyTableau[1] === '' && copyTableau[2] === 'o') {
            copyTableau[1] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[3] === 'o' && copyTableau[4] === '' && copyTableau[5] === 'o') {
            copyTableau[4] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[6] === 'o' && copyTableau[7] === '' && copyTableau[8] === 'o') {
            copyTableau[7] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[0] === 'o' && copyTableau[1] === 'o' && copyTableau[2] === '') {
            copyTableau[2] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[0] === '' && copyTableau[1] === 'o' && copyTableau[2] === 'o') {
            copyTableau[0] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[3] === 'o' && copyTableau[4] === 'o' && copyTableau[5] === '') {
            copyTableau[5] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[3] === '' && copyTableau[4] === 'o' && copyTableau[5] === 'o') {
            copyTableau[3] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[6] === 'o' && copyTableau[7] === 'o' && copyTableau[8] === '') {
            copyTableau[8] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[6] === '' && copyTableau[7] === 'o' && copyTableau[8] === 'o') {
            copyTableau[6] = 'o'
            return setTableau(copyTableau)
          }
          //attaque colonne
          if (copyTableau[0] === 'o' && copyTableau[3] === '' && copyTableau[6] === 'o') {
            copyTableau[3] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[1] === 'o' && copyTableau[4] === '' && copyTableau[7] === 'o') {
            copyTableau[4] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[2] === 'o' && copyTableau[5] === '' && copyTableau[8] === 'o') {
            copyTableau[5] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[0] === 'o' && copyTableau[3] === 'o' && copyTableau[6] === '') {
            copyTableau[6] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[0] === '' && copyTableau[3] === 'o' && copyTableau[6] === 'o') {
            copyTableau[0] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[1] === 'o' && copyTableau[4] === 'o' && copyTableau[7] === '') {
            copyTableau[7] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[1] === '' && copyTableau[4] === 'o' && copyTableau[7] === 'o') {
            copyTableau[1] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[2] === 'o' && copyTableau[5] === 'o' && copyTableau[8] === '') {
            copyTableau[8] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[2] === '' && copyTableau[5] === 'o' && copyTableau[8] === 'o') {
            copyTableau[2] = 'o'
            return setTableau(copyTableau)
          }
          //attaque diagonale
          if (copyTableau[0] === 'o' && copyTableau[4] === '' && copyTableau[8] === 'o') {
            copyTableau[4] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[0] === 'o' && copyTableau[4] === 'o' && copyTableau[8] === '') {
            copyTableau[8] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[0] === '' && copyTableau[4] === 'o' && copyTableau[8] === 'o') {
            copyTableau[0] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[2] === 'o' && copyTableau[4] === '' && copyTableau[6] === 'o') {
            copyTableau[4] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[2] === 'o' && copyTableau[4] === 'o' && copyTableau[6] === '') {
            copyTableau[6] = 'o'
            return setTableau(copyTableau)
          }
          if (copyTableau[2] === '' && copyTableau[4] === 'o' && copyTableau[6] === 'o') {
            copyTableau[2] = 'o'
            return setTableau(copyTableau)
          }
        }

        const xincenter = () => {
          if (nbSymbole !== 0) {
            if (copyTableau[1] === 'x') {
              if (copyTableau[7] === '') {
                copyTableau[7] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[0] === '') {
                copyTableau[0] = 'o'
                return setTableau(copyTableau)
              }
            }
            if (copyTableau[7] === 'x') {
              if (copyTableau[1] === '') {
                copyTableau[1] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[2] === '') {
                copyTableau[2] = 'o'
                return setTableau(copyTableau)
              } 
            }
            if (copyTableau[3] === 'x') {
              if (copyTableau[5] === '') {
                copyTableau[5] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[0] === '') {
                copyTableau[0] = 'o'
                return setTableau(copyTableau)
              } 
            }
            if (copyTableau[5] === 'x') {
              if (copyTableau[3] === '') {
                copyTableau[3] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[2] === '') {
                copyTableau[2] = 'o'
                return setTableau(copyTableau)
              } 
            }
            if (copyTableau[2] === 'x') {
              if (copyTableau[6] === '') {
                copyTableau[6] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[8] === '') {
                copyTableau[8] = 'o'
                return setTableau(copyTableau)
              } 
            }
            if (copyTableau[6] === 'x') {
              if (copyTableau[2] === '') {
                copyTableau[2] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[7] === '') {
                copyTableau[7] = 'o'
                return setTableau(copyTableau)
              } 
            }
            if (copyTableau[0] === 'x') {
              if (copyTableau[8] === '') {
                copyTableau[8] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[3] === '') {
                copyTableau[3] = 'o'
                return setTableau(copyTableau)
              } 
            }

            if (copyTableau[8] === 'x') {
              if (copyTableau[0] === '') {
                copyTableau[0] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[1] === '') {
                copyTableau[1] = 'o'
                return setTableau(copyTableau)
              } else if (copyTableau[2] === '') {
                copyTableau[2] = 'o'
                return setTableau(copyTableau)
              }
            }
          }
        }

        const oincenter = () => {
          if (nbSymbole !== 0) {
            if (copyTableau[0] === 'x' && copyTableau[1] === '' && copyTableau[2] === 'x') {
              copyTableau[1] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[0] === 'x' && copyTableau[3] === '' && copyTableau[6] === 'x') {
              copyTableau[3] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[8] === 'x' && copyTableau[7] === '' && copyTableau[6] === 'x') {
              copyTableau[7] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[8] === 'x' && copyTableau[5] === '' && copyTableau[2] === 'x') {
              copyTableau[5] = 'o'
              return setTableau(copyTableau)
            }

            if (copyTableau[0] === 'x' && copyTableau[1] === 'x' && copyTableau[2] === '') {
              copyTableau[2] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[0] === 'x' && copyTableau[3] === 'x' && copyTableau[6] === '') {
              copyTableau[6] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[2] === 'x' && copyTableau[1] === 'x' && copyTableau[0] === '') {
              copyTableau[0] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[2] === 'x' && copyTableau[5] === 'x' && copyTableau[8] === '') {
              copyTableau[8] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[6] === 'x' && copyTableau[7] === 'x' && copyTableau[8] === '') {
              copyTableau[8] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[6] === 'x' && copyTableau[3] === 'x' && copyTableau[0] === '') {
              copyTableau[0] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[8] === 'x' && copyTableau[7] === 'x' && copyTableau[6] === '') {
              copyTableau[6] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[8] === 'x' && copyTableau[5] === 'x' && copyTableau[2] === '') {
              copyTableau[2] = 'o'
              return setTableau(copyTableau)
            }
            if (copyTableau[1] === 'x') {
              if (copyTableau[2] === '') {
                copyTableau[2] = 'o'
                return setTableau(copyTableau)
              } 
              if (copyTableau[0] === '') {
                copyTableau[0] = 'o'
                return setTableau(copyTableau)
              }
            }
            if (copyTableau[5] === 'x') {
              if (copyTableau[8] === '') {
                copyTableau[8] = 'o'
                return setTableau(copyTableau)
              }
              if (copyTableau[2] === '') {
                copyTableau[2] = 'o'
                return setTableau(copyTableau)
              }
            }
            if (copyTableau[7] === 'x') {
              if (copyTableau[6] === '') {
                copyTableau[6] = 'o'
                return setTableau(copyTableau)
              }
              if (copyTableau[8] === '') {
                copyTableau[8] = 'o'
                return setTableau(copyTableau)
              }
            }
            if (copyTableau[3] === 'x') {
              if (copyTableau[0] === '') {
                copyTableau[0] = 'o'
                return setTableau(copyTableau)
              }
              if (copyTableau[6] === '') {
                copyTableau[6] = 'o'
                return setTableau(copyTableau)
              }
            }

            if (random <= 2) {
              if (copyTableau[0] === 'x' && copyTableau[8] === 'x' && copyTableau[2] === '') {
                copyTableau[2] = 'o'
                return setTableau(copyTableau)
              }
              if (copyTableau[6] === 'x' && copyTableau[2] === 'x' && copyTableau[0] === '') {
                copyTableau[0] = 'o'
                return setTableau(copyTableau)
              }
            }
            if (random <= 4) {
              if (copyTableau[0] === 'x' && copyTableau[8] === 'x' && copyTableau[5] === '') {
                copyTableau[5] = 'o'
                return setTableau(copyTableau)
              }
              if (copyTableau[6] === 'x' && copyTableau[2] === 'x' && copyTableau[3] === '') {
                copyTableau[3] = 'o'
                return setTableau(copyTableau)
              }
            }     
          }
        }

        if (copyTableau[4] === 'x') {
          attaque()
          xincenter()
        }

        if (copyTableau[4] !== 'x') {
          attaque()
          oincenter()
        }

      }
    }
  }

  useEffect(() => {
    let isEquality = 0
    let winner = null
    //ligne
    if (winner === null && tableau[0] === 'x' && tableau[0] === tableau[1] && tableau[1] === tableau[2]) {
      const winner = tableau[0]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[3] === 'x' && tableau[3] === tableau[4] && tableau[4] === tableau[5]) {
      winner = tableau[3]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[6] === 'x' && tableau[6] === tableau[7] && tableau[7] === tableau[8]) {
      winner = tableau[6]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    //column
    if (winner === null && tableau[0] === 'x' && tableau[0] === tableau[3] && tableau[3] === tableau[6]) {
      winner = tableau[0]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[1] === 'x' && tableau[1] === tableau[4] && tableau[4] === tableau[7]) {
      winner = tableau[1]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[2] === 'x' && tableau[2] === tableau[5] && tableau[5] === tableau[8]) {
      winner = tableau[2]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    //diagonale
    if (winner === null && tableau[0] === 'x' && tableau[0] === tableau[4] && tableau[4] === tableau[8]) {
      winner = tableau[0]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[2] === 'x' && tableau[2] === tableau[4] && tableau[4] === tableau[6]) {
      winner = tableau[2]
      if (winner === 'x') {
        setScoreX(scoreX => scoreX + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    //ligne
    if (winner === null && tableau[0] === 'o' && tableau[0] === tableau[1] && tableau[1] === tableau[2]) {
      const winner = tableau[0]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[3] === 'o' && tableau[3] === tableau[4] && tableau[4] === tableau[5]) {
      winner = tableau[3]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[6] === 'o' && tableau[6] === tableau[7] && tableau[7] === tableau[8]) {
      winner = tableau[6]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    //column
    if (winner === null && tableau[0] === 'o' && tableau[0] === tableau[3] && tableau[3] === tableau[6]) {
      winner = tableau[0]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[1] === 'o' && tableau[1] === tableau[4] && tableau[4] === tableau[7]) {
      winner = tableau[1]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[2] === 'o' && tableau[2] === tableau[5] && tableau[5] === tableau[8]) {
      winner = tableau[2]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    //diagonale
    if (winner === null && tableau[0] === 'o' && tableau[0] === tableau[4] && tableau[4] === tableau[8]) {
      winner = tableau[0]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    if (winner === null && tableau[2] === 'o' && tableau[2] === tableau[4] && tableau[4] === tableau[6]) {
      winner = tableau[2]
      if (winner === 'o') {
        setScoreO(scoreO => scoreO + 1)
      }
      setTour([])
      return setTableau(inital_state)
    }
    // egalité
    tableau.map(symbole => (isEquality += symbole.length))
    if (isEquality === 9) {
      setTour([])
      return setTableau(inital_state)
    }

  }, [setTableau, tableau, inital_state])

  return (
    <>
      <div className='header'>
        <button onClick={handleSolo}>Mode Solo</button>
        <div className='titre'>
          <h1>MORPION</h1>
          <span>Mode {mode}</span>
        </div>
        <button onClick={handleMulti}>Mode Contre IA</button>
      </div>
      <div className='App'>
        <div className='container-score'>
          <span>Joueur x : {scoreX}</span>
          <span>Joueur o : {scoreO}</span>
        </div>
        <div className='container'>
          {
            tableau.map((symbole, key) => {
              return <div key={key} onClick={() => handleClick(key)} className={`case${key}`}>{symbole}</div>
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
