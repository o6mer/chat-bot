import React, {
  ChangeEventHandler,
  FormEvent,
  useCallback,
  useState,
} from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  OnConnect,
  Connection,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { TConversation } from "../../../../Types/Types";

const conversations: TConversation[] = [
  {
    id: "1",
    question: "sup?",
    response: "ok",
    followUp: [{ input: "what your name?", response: "omer" }],
  },
  {
    id: "2",
    question: "supppp?",
    response: "okkkkkk",
    followUp: [{ input: "what your nameeeeee?", response: "omerrrrrr" }],
  },
];

const conversationsToFlow = (conversations: TConversation[]) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  nodes.push({
    id: conversations[0].id,
    position: { x: 100, y: 100 * 1 },
    data: { label: conversations[0].question },
  });

  nodes.push({
    id: conversations[1].id,
    position: { x: 100, y: 100 * 2 },
    data: { label: conversations[1].question },
  });

  edges.push({
    id: `${conversations[0].id}-${conversations[1].id}`,
    source: conversations[0].id,
    target: conversations[1].id,
    label: conversations[0].followUp[0].input,
  });

  return { nodes, edges };
};

const ConversationEditor = () => {
  const [question, setQuestion] = useState("");

  const { nodes: initialNodes, edges: initialEdges } =
    conversationsToFlow(conversations);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);

  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onAddNode = (question: string) => {
    setNodes((prev: Node[]) => {
      prev.push({
        id: `${question + prev.length}`,
        position: { x: 100, y: 100 * prev.length },
        data: { label: question },
      });
      return [...prev];
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 m-12 [0px_0px_25px_3px_rgba(0,0,0,0.07)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className="bg-white"
      >
        <Controls />
        <Background />
      </ReactFlow>
      <div className="p-2 bg-white flex flex-col gap-4">
        <form action="" className=" flex gap-2 ">
          <input
            type="text"
            placeholder="Question..."
            className="border rounded-lg"
            value={question}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setQuestion(e.currentTarget.value)
            }
          />
          <input type="text" placeholder="response..." className="border" />
          <label htmlFor="follow-up">follow up: </label>
          <select name="" id="follow-up">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </form>
        <div className="flex w-full justify-between">
          <button className="border hover:bg-gray-200 px-2 py-1 rounded-lg transition-all">
            Clear
          </button>
          <button
            className="bg-green-600 hover:bg-green-500 font-bold text-sm px-2 py-2 text-white  rounded-lg transition-all"
            onClick={() => onAddNode(question)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationEditor;
