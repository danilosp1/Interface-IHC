"use client"
import Head from 'next/head';
import { useEffect } from 'react';

const EmotionCheck = () => {
    useEffect(() => {
        const scriptSrcs = [
            "https://sdk.morphcast.com/mphtools/v1.1/mphtools.js",
            "https://ai-sdk.morphcast.com/v1.16/ai-sdk.js",
            "https://sdk.morphcast.com/emotion-statistics/v1.0-beta/script.js"
        ];

        scriptSrcs.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.defer = true;
            document.head.appendChild(script);
        });

        return () => {
            scriptSrcs.forEach(src => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.head.removeChild(script);
                }
            });
        };
    }, []);

    useEffect(() => {
        // Função que contém a lógica principal
        const initializeEmotionCheck = () => {
            if (typeof CY !== 'undefined' && typeof MorphCastStatistics !== 'undefined') {
                // Sua lógica do script aqui
            }
        };

        // Verifica se os scripts já foram carregados
        const scriptsReady = document.querySelectorAll('script').length >= 3; // Substitua 3 pelo número exato de scripts que você espera

        if (scriptsReady) {
            initializeEmotionCheck();
        } else {
            // Adiciona um ouvinte para o último script carregado
            const lastScript = document.querySelector('script:last-of-type');
            if (lastScript) {
                lastScript.addEventListener('load', initializeEmotionCheck);
            }
        }

        return () => {
            // Remova os ouvintes de eventos aqui, se necessário
        };
    }, []);

    // Função para salvar dados
    const saveToFile = () => {
        // Lógica para salvar arquivo
    };

    return (
        <div>
            <button onClick={saveToFile}>Download Dominant Emotion Data</button>
        </div>
    );
};

export default EmotionCheck;
