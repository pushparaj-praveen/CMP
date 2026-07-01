import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData } from "../types";
import { 
  Database, 
  Copy, 
  Download, 
  RotateCcw, 
  Save, 
  Terminal, 
  FileCheck, 
  AlertTriangle,
  CodeXml,
  Sparkles
} from "lucide-react";

interface DatabaseEditorViewProps {
  data: UniversityData;
  onUpdateDatabase: (updatedData: UniversityData) => void;
  onResetDatabase: () => void;
}

export const DatabaseEditorView: React.FC<DatabaseEditorViewProps> = ({ 
  data, 
  onUpdateDatabase,
  onResetDatabase
}) => {
  const [jsonText, setJsonText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Populate formatted JSON text whenever data changes
  useEffect(() => {
    setJsonText(JSON.stringify(data, null, 2));
    setIsValid(true);
    setValidationError(null);
  }, [data]);

  const handleTextChange = (text: string) => {
    setJsonText(text);
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed !== "object" || parsed === null) {
        throw new Error("JSON payload must represent a structured Object.");
      }
      if (!parsed.universityName) {
        throw new Error("Missing mandatory 'universityName' key at root level.");
      }
      setIsValid(true);
      setValidationError(null);
    } catch (err: any) {
      setIsValid(false);
      setValidationError(err.message || "Invalid JSON syntax.");
    }
  };

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSave = () => {
    if (!isValid) {
      triggerToast("Cannot save. Correct JSON syntax errors first.");
      return;
    }
    try {
      const parsed = JSON.parse(jsonText) as UniversityData;
      onUpdateDatabase(parsed);
      triggerToast("Central JSON Database updated! All screens synced successfully.");
    } catch (err: any) {
      triggerToast(`Execution error: ${err.message}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText)
      .then(() => {
        setIsCopied(true);
        triggerToast("Copied JSON payload to system clipboard!");
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => triggerToast("Failed to write to clipboard."));
  };

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonText);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "university_central_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    triggerToast("Initiating university_central_data.json file download...");
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    onResetDatabase();
    setShowResetConfirm(false);
    triggerToast("Database restored to default values!");
  };

  return (
    <div className="space-y-16 pb-12">
      
      {/* Toast notifications */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-slate-900 border border-teal-500 shadow-2xl flex items-center gap-2.5 text-xs text-slate-200"
          >
            <Terminal className="w-4 h-4 text-teal-400" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700 uppercase tracking-widest">
            <Database className="w-4 h-4" />
            Central DB Controller
          </div>
          <h1 className="text-3xl font-serif text-slate-900 font-bold tracking-tight">
            Central JSON Database Editor
          </h1>
          <p className="text-sm text-slate-500 max-w-xl font-light">
            Live-edit, copy, or download the unified JSON payload that defines and powers every coordinate, statistics summary, and ledger in this portal.
          </p>
        </div>

        {/* Database utility tools */}
        <div className="flex flex-wrap gap-2.5 text-xs font-mono">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Copy entire raw JSON"
          >
            <Copy className="w-3.5 h-3.5 text-slate-400" />
            Copy Payload
          </button>
          
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Download JSON file locally"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            Download DB File
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-50 hover:bg-red-100/50 border border-red-200 rounded-lg text-red-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Reset to default details"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restore Defaults
          </button>
        </div>
      </div>

      {/* 2. TERMINAL EDITOR VIEWPORT & HELP PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Code Editor (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-900 shadow-md flex-1 flex flex-col justify-between">
            {/* Header tab line of editor */}
            <div className="bg-slate-900 px-5 py-3 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CodeXml className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-mono text-slate-400">university_data_schema.json</span>
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
              </div>
              
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
              </div>
            </div>

            {/* Main interactive area */}
            <div className="relative flex-1 bg-slate-950/90">
              <textarea
                value={jsonText}
                onChange={(e) => handleTextChange(e.target.value)}
                className="w-full h-[520px] p-6 font-mono text-[11px] text-teal-300 bg-transparent border-0 focus:ring-0 focus:outline-none resize-y leading-relaxed overflow-y-auto"
                spellCheck="false"
              />
            </div>

            {/* Schema Validation Status */}
            <div className="bg-slate-900 p-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs">
                {isValid ? (
                  <div className="flex items-center gap-1.5 text-teal-400 font-mono">
                    <FileCheck className="w-4 h-4" />
                    Schema verified. State engine is operational.
                  </div>
                ) : (
                  <div className="flex items-start gap-1.5 text-red-400 font-mono">
                    <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">
                      <strong>Syntax Error:</strong> {validationError}
                    </span>
                  </div>
                )}
              </div>

              {/* Apply Changes */}
              <button
                onClick={handleSave}
                disabled={!isValid}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                  isValid 
                    ? "bg-teal-700 text-white hover:bg-teal-600 cursor-pointer shadow-sm" 
                    : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                }`}
              >
                <Save className="w-4 h-4" />
                Apply Live Sync
              </button>
            </div>
          </div>
        </div>

        {/* Documentation Sidebar Panel (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
                <Sparkles className="w-4.5 h-4.5 text-teal-700" />
                <h3 className="text-sm font-serif text-slate-900 font-bold">Portal Quick Documentation</h3>
              </div>

              <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-light">
                <p>
                  This database acts as the single source of truth for the entire university portal. Any changes made here are instantly persistent in browser storage.
                </p>

                <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-[10px]">
                  <span className="block text-[9px] font-bold text-teal-700 uppercase tracking-widest">SCHEMA ROOTS</span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-500">
                    <li>universityName: String</li>
                    <li>tagline: String</li>
                    <li>established: String</li>
                    <li>location: String</li>
                    <li>deanMessage: Object</li>
                    <li>departments: Array</li>
                    <li>students: Array</li>
                    <li>faculty: Array</li>
                  </ul>
                </div>

                <div className="space-y-2 text-[11px] leading-relaxed">
                  <p>
                    <strong>Integrity Checks:</strong> Changing root tags (e.g., spelling of <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-700 font-bold">universityName</code>) will alert you in real-time.
                  </p>
                  <p>
                    <strong>GUI Alignment:</strong> Adding records, modifying faculty bios, or editing grades inside visual pages will automatically update and reflect inside this payload!
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50 text-center font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Anna University System Console</span>
              <span className="text-[9px] text-slate-500 block">v1.3.0-stable (Light Mode)</span>
            </div>
          </div>
        </div>

      </div>

      {/* REVERT / RESET CONFIRMATION DIALOG MODAL */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 max-w-md w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="space-y-2 text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto text-xl font-bold">
                  ⚠️
                </div>
                <h3 className="text-lg font-serif font-extrabold text-slate-950">
                  Revert Database changes?
                </h3>
                <p className="text-xs text-slate-650 leading-relaxed">
                  Are you absolutely certain you want to discard your edits and restore the original Anna University defaults? This action cannot be undone.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold border border-slate-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReset}
                  className="flex-1 py-2.5 rounded-xl bg-red-650 hover:bg-red-700 text-white font-mono text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  Revert All Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
