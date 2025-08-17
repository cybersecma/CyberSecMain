import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import BreachesTable from "../components/BreachesTable";

type Breach = {
  id: string;
  name: string;
  date: string;
  description: string;
};

export default function BreachesPage() {
  const [breaches, setBreaches] = useState<Breach[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "filtered_messages"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Breach[];
        setBreaches(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">LOADING BREACHES</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl text-red-500 mb-4">Error Loading Breaches</h2>
          <p className="text-gray-300 mb-6">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Breach Records
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Browse the latest database breaches collected from our platform.
          </p>
        </div>

        <BreachesTable breaches={breaches} />
      </div>
    </div>
  );
}
