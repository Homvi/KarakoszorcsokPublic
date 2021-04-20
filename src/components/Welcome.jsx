import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const Welcome = () => {
    return (
        <Grid item container >
            < Grid item xs={1} md={2} />
            <Grid item align="center" xs={10} md={8} container>
                <h2 style={{ margin: "10px auto" }} >Polgármesteri köszöntő</h2>
                <div className="wecome-content">
                    <p>
                        Isten hozta önöket Karakószörcsök Község hivatalos honlapján!<br /> Megtiszteltetés számomra, hogy a település polgármestereként, önkormányzatunk nevében köszönthetek minden érdeklődőt.
          Községünk a Vendvidék mellett, az Őrségben, Őriszentpétertől 8 kilométerre északra fekszik, a Lugos-patak völgyében, erdöktől körülvéve. A falu fekvése, jó levegője, csöndes hangulata ideális a pihenni és kikapcsolódásra vágyóknak, a munkából hazatérőknek és a helyben lakóknak egyaránt.
          Arra törekszünk, hogy honlapunk minden fontos, hasznos helyi információt tartalmazzon, és remélem, hogy ezeknek Önök is hasznát veszik.<br />
          Remélem, a honlap böngészése után kedvet érez majd, hogy személyesen is megismerkedjen településünkkel és az itt élő emberekkel!
      </p>

                    <Typography style={{ margin: "20px" }} >
                        Üdvözlettel:<br /> Honvédő Szandra  <br /> Karakószörcsök község polgármestere
</Typography>


                </div>

            </Grid>
            < Grid item xs={1} md={2} />
        </Grid>
    )
}

export default Welcome
