"use client";
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { getReportsInRange } from '../utils/reportData';
import { IoCloseSharp } from "react-icons/io5";

const ReportDialog = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(5);
  const [date, setDate] = useState(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));


  const showAllReport = () => {
    console.log('ReportDialog handleOpen called');
    setOpen(true);
  };

  const closeHander = () => {
    setOpen(false);
  };

  const reports = getReportsInRange(date);
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(reports.length / reportsPerPage);
  const currPage = [];
  for (let i = 1; i <= totalPages; i++) {
    currPage.push(i);
  }

  return (
    <div className="flex justify-center items-end h-full">
      <Button className="px-4 py-3 bg-blue-800 text-white" onClick={showAllReport}>
        View Recent Reports
      </Button>
      <Dialog open={open} onClose={closeHander} aria-labelledby="report-dialog-title">
        <div className='flex flex-row justify-evenly items-center'>
          <DialogTitle id="report-dialog-title" className='text-center font-bold text-xl'>Recent Reports</DialogTitle>
          <DialogTitle onClick={closeHander} color="primary">
          <IoCloseSharp  className='text-3xl text-black'/>
          </DialogTitle>
        </div>
        <DialogContent>
          <div className="flex flex-row gap-x-7 py-4">
            <label>Select Date : </label>
            <input
              type="date"
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </div>
          {
            reports.length === 0 ? (
              <h1 className="text-center font-bold opacity-80">No report reports available within the selected date .</h1>
            ) : (
              <table className="border-collapse border border-slate-500 px-3">
                <thead className="border-collapse border border-slate-500 px-3">
                  <tr className="border-collapse border border-slate-500 px-3">
                    <th>Date</th>
                    <th>Report Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody className="border-collapse border border-slate-500 px-3 ml-4">
                  {currentReports.map((report, index) => (
                    <tr key={index} >
                      <td>{report.date.toLocaleDateString()}</td>
                      <td>{report.name}</td>
                      <td>{report.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table >
            )
          }

        </DialogContent >
        <DialogActions>
          <div className="flex justify-between  gap-x-10 items-center ">
            <button className="px-4 py-1 bg-slate-700 text-white rounded-md" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Pre
            </button>

            {currPage.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                disabled={pageNumber === currentPage}
              >
                {pageNumber}
              </button>
            ))}

            <button className="px-4 py-1 bg-slate-700 text-white rounded-md" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>

            <button className="px-4 py-1 bg-slate-700 text-white rounded-md" onClick={() => setCurrentPage(totalPages)}>Last</button>
          </div>

        </DialogActions>
      </Dialog >
    </div >
  );
};

export default ReportDialog;
