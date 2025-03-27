import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContract2 from "../hooks/useContract2";
import ContractIntro from "../components/ContractIntro";
import CreateContractForm from "../components/CreateContractForm";
import FetchContractSection from "../components/FetchContractSection";
import { useWallet } from "../components/WalletContext"; // Corrected import path (assuming src/WalletContext.js)

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
};

const Contract = () => {
  const { walletData } = useWallet(); // Get wallet data from context
  const contractHooks = useContract2(walletData?.provider); // Add optional chaining for safety
  const [contractId, setContractId] = useState("");
  const [contractDetails, setContractDetails] = useState(null);
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showFetchForm, setShowFetchForm] = useState(false);

  const handleGetContractDetails = async () => {
    if (!walletData?.provider) {
      toast.error("🦊 Please connect your wallet!");
      return;
    }
    setLoading(true);
    try {
      const details = await contractHooks.getContractDetails(contractId);
      const milestones = await contractHooks.getMilestones(contractId);
      setContractDetails(details);
      setMilestones(milestones);
    } catch (err) {
      toast.error("Failed to fetch details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-customSemiPurple min-h-screen text-white"
    >
      <div className="container mx-auto px-4 py-10 pt-32">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          Milestone-Based Contracts
        </h1>

        <ContractIntro 
          showCreateForm={showCreateForm}
          showFetchForm={showFetchForm}
          onToggleCreateForm={() => setShowCreateForm(!showCreateForm)}
          onToggleFetchForm={() => setShowFetchForm(!showFetchForm)}
        />

        {showCreateForm && (
          <CreateContractForm 
            contractHooks={contractHooks}
            loading={loading}
            setLoading={setLoading}
          />
        )}

        {showFetchForm && (
          <FetchContractSection
            contractId={contractId}
            setContractId={setContractId}
            contractDetails={contractDetails}
            milestones={milestones}
            currentAccount={walletData?.address}
            loading={loading}
            handleGetContractDetails={handleGetContractDetails}
            contractHooks={contractHooks}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Contract;