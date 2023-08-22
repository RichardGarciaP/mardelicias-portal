// import { useEffect, useState } from 'react';

// material-ui
// import { Grid } from '@mui/material';

// project imports



// import { gridSpacing } from 'store/constant';
// import TotalGrowthBarChart from "../Default/TotalGrowthBarChart";
// import PopularCard from "../Default/PopularCard";
import MainCard from "../../../ui-component/cards/MainCard";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Users = () => {
    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     setLoading(false);
    // }, []);

    return (
        <>
            <MainCard title="Usuarios"></MainCard>
            {/*<Grid container spacing={gridSpacing}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <Grid container spacing={gridSpacing}>*/}
            {/*            <Grid item xs={12} md={8}>*/}
            {/*                <TotalGrowthBarChart isLoading={isLoading} />*/}
            {/*            </Grid>*/}
            {/*            <Grid item xs={12} md={4}>*/}
            {/*                <PopularCard isLoading={isLoading} />*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </>
    );
};

export default Users;
