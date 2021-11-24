import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar } from 'react-native';
import containersApi from '../../api/containersApi';
import { WokerkerCard } from '../../components/WorkersCard';
import { WorkerInterface } from '../../interfaces/interfaces';
import { colors } from '../../theme/Colors';

const Component = () => {
    const [workers, setWorker] = useState<[WorkerInterface] | null>(null,);

    const getWorker = async () => {
        const { data } = await containersApi.get<[WorkerInterface]>('/workers',)

        setWorker(data);
    };

    useEffect(() => {
        getWorker();
    }, []);

    const renderWorker = workers?.map((worker, index) => {
        return <WokerkerCard key={`worker-${index}`} worker={worker} />
    });

    return (
        //Container
        <ScrollView style={{backgroundColor: colors.gray_f2f}}> 
            <StatusBar backgroundColor={colors.gray_f2f} barStyle="dark-content"/>
            {renderWorker}
        </ScrollView>
        
    )
}

export default Component;