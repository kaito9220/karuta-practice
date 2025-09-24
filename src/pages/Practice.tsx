import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/Practice.css';
import { karutaCards } from '../data/karutaData.tsx';

function Practice() {
  // const [isCorrect, setIsCorrect] = useState(false);
  // const [value, setValue] = useState('');
  // const [currentKarutas, setCurrentKarutas] = useState();

  // karutaCardsから必要な枚数被りがないようにランダムに選ぶ
  const numberOfCards = 4; // 表示する枚数
  const shuffledCards = karutaCards.sort(() => 0.5 - Math.random());
  const selectedCards = shuffledCards.slice(0, numberOfCards);

  // 上の句をランダムに選ぶ
  const randomIndex = Math.floor(Math.random() * selectedCards.length);
  const karutaCard = selectedCards[randomIndex];

  // クリックイベントのハンドラ
  const handleKarutaClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedText = event.currentTarget.textContent;
    if (clickedText?.includes(karutaCard.torifuda)) {
      // setIsCorrect(true);
      alert(`正解！\n決まり字は:${karutaCard.kimariji}`);
    } else {
      // setIsCorrect(false);
      alert(`不正解！`);
    }
  };
  
  return (
    <>
      <Paper sx={{ 
        p: 2, 
        // textAlign: 'center', 
        color: 'primary', 
        border: 4, 
        borderColor: 'primary.main', 
        mb: 2 
      }}>
        <Typography variant="h5" component="h2" gutterBottom>
          上の句
        </Typography>
        <Typography variant="body1" gutterBottom>
          {karutaCard.kamino_ku}
        </Typography>
      </Paper>
      <Box 
        sx={{
          // width: '500',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <Grid container spacing={1} 
        // sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Grid size={3}>
            <Box 
              sx={{
                width: '500%',
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
              >
              {selectedCards.map((card) => (
                <Button 
                  variant="contained" 
                  onClick={handleKarutaClick} 
                  key={card.id.toString()} 
                  sx={{
                    p: 2, 
                    textAlign: 'center', 
                    color: 'text.primary', 
                    backgroundColor: 'background.paper',
                    border: 4, 
                    borderColor: 'secondary.main' 
                  }}
                >
                  <section className='ku'>
                    {/* <Typography sx={{ whiteSpace: 'pre-wrap' }}>{card.kamino_ku}</Typography> */}
                    <Typography 
                      sx={{ whiteSpace: 'pre-wrap' }}
                    >
                      {card.torifuda}
                    </Typography>
                  </section>
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Practice;