import { useDroppable } from "@dnd-kit/core";
import { Space } from "antd";
import { Text } from "../text";

const KanbanColumn = () => {
  const { isOver, setNodeRef, active } = useDroppable({ id: "", data: "" });

  return (
    <div
      ref={setNodeRef}
      style={{ display: "flex", flexDirection: "column", padding: "0 16px" }}
    >
      <div style={{ padding: "12px" }}>
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Space>
            <Text></Text>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default KanbanColumn;
