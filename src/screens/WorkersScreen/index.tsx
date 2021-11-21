import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import containersApi from '../../api/containersApi';
import { WokerkerCard } from '../../components/WorkersCard';
import { WorkerInterface } from '../../interfaces/LoginInterfaces';

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

    return <ScrollView>{renderWorker}</ScrollView>
}

export default Component;