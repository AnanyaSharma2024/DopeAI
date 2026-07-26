import React, { useEffect, useState } from "react";
import { PanelLeftIcon, PenBoxIcon, Plus } from "lucide-react";
import { getConversations } from "../features/getConversations";
import { useDispatch } from "react-redux";
import { setConversation } from "../redux/conversationSlice";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
  const getConv = async () => {
    const data = await getConversations();
    dispatch(setConversation(data));
  };

  getConv();
}, [dispatch]);
  return (
    <div className="fixed lg:static inset-y-0 left-0 z-50 w-[270px] h-screen shrink-0 bg-[#0d0f14] border-r border-white/[0.06] overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2.5 px-4 py-4 border-b border-white/[0.06]">
          <button
            onClick={() => setCollapsed(true)}
            className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.05] transition-colors duration-150 cursor-pointer"
          >
            <PanelLeftIcon size={20} />
          </button>

          <span className="text-[16px] font-semibold text-slate-100 tracking-tight flex-1">
            DopeAI
          </span>

          <span className="text-[10px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full tracking-wide">
            free
          </span>

          <button className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.05] transition-colors duration-150 cursor-pointer onClick={()=>createCoversation()}">
            <PenBoxIcon size={20} />
          </button>
        </div>

        <div className="px-4 pt-4 pb-1">
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-slate-200 hover:bg-white/[0.05] transition-colors duration-150">
            <Plus size={18} />
            <span>New Chat</span>
          </button>
        </div>
        <div>
          <button>
            Recent Chats
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;