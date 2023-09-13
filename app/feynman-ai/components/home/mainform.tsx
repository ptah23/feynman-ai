"use client";
import React from 'react';
import axios from "axios";
import { useState } from "react";
import Card from "@/components/home/card";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
const MainForm = () => {

    const [concept, setConcept] = useState("");
    const [explanation, setExplanation] = useState("");
    const [evaluation, setEvaluation] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const submit = () => {
        setEvaluation("");
        setShowSpinner(true);
        axios
            .post('/api/evaluate',
                {concept, explanation})
            .then((res) => {
                setEvaluation(res.data);
                setShowSpinner(false);
            }).catch((error) => {
                setShowSpinner(false);
                setEvaluation(error.message);
            });
        };
    return (
        <div className="my-8 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-4 px-5 md:grid-cols-4 xl:px-0">

            <Card
                key={"concept"}
                title={"concept"}
                description={"put the concept you want to understand here"}
                large={false}
            ><TextareaAutosize
                className="resize-y max-h-48 h-full w-5/6 text-sm font-normal font-sans leading-5 p-3 rounded-xl rounded-br-none shadow-md shadow-slate-100 focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 focus:border-purple-500 bg-white text-slate-900 focus-visible:outline-0"
                aria-label="Demo input"
                placeholder="Concept..."
                value={concept}
                onChange={e => setConcept(e.target.value)}
            /></Card>

            <Card
                key={"yourWords"}
                title={"in your own words"}
                description={"put in-your-own words explanation here"}
                large={false}
            ><TextareaAutosize
                className="resize-y max-h-48 h-full w-5/6 text-sm font-normal font-sans leading-5 p-3 rounded-xl rounded-br-none shadow-md shadow-slate-100 focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 focus:border-purple-500 bg-white text-slate-900 focus-visible:outline-0"
                aria-label="Demo input"
                placeholder="Your explanation..."
                value={explanation}
                onChange={e => setExplanation(e.target.value)}
            /></Card>
            <div
                className="mx-auto md:col-span-4 mt-0 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
                style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
                <Button variant="outlined" size="large" disabled={concept === "" || explanation === "" || showSpinner} onClick={e => submit()}>Evaluate</Button>
            </div>
            <Card
                key={"evaluation"}
                title={"Evaluation"}
                description={"AI evaluation of your understanding"}
                large={true}
            ><div className="flex-col h-fit justify-items-center">
                {showSpinner ? (<CircularProgress /> ) :
                    (<div>{evaluation}</div>)}
            </div>
            </Card>

        </div>
    );
};

export default MainForm;