"use client";
import React from 'react';
import axios from "axios";
import { useState } from "react";
import Card from "@/components/home/card";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
const MainForm = () => {

    const [concept, setConcept] = useState("");
    const [explanation, setExplanation] = useState("");
    const [evaluation, setEvaluation] = useState("");
    const submit = () => {
        axios
            .post('/api/evaluate',
                {concept, explanation})
            .then((res) => {
                setEvaluation(res.data);
            });
    };
    return (
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-4 xl:px-0">

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
            <Card
                key={"evaluation"}
                title={"Evaluation"}
                description={"AI evaluation of your understanding"}
                large={true}
            ><div className="flex-col justify-items-center">
                <div><Button variant="outlined" size="large" disabled={concept === "" || explanation === ""} onClick={e => submit()}>Evaluate</Button></div>
                <div>{evaluation}</div>
            </div>
            </Card>

        </div>
    );
};

export default MainForm;