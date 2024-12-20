import { Card } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { Text } from "../text";
import { Area, AreaConfig } from "@ant-design/plots";
import { useList } from "@refinedev/core";
import { DASHBOARD_DEALS_CHART_QUERY } from "@/graphql/queries";
import React from "react";
import { mapDealsData } from "@/utilities/helpers";
import { GetFieldsFromList } from "@refinedev/nestjs-query";
import { DashboardDealsChartQuery } from "@/graphql/types";

interface CustomAreaConfig extends AreaConfig {
  filters?: Array<{
    field: string;
    operator: string;
    value: string[];
  }>;
  stack: boolean;
}

const DealsChart = () => {
  const { data } = useList<GetFieldsFromList<DashboardDealsChartQuery>>({
    resource: "dealStages",
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  });

  const dealData = React.useMemo(() => {
    return mapDealsData(data?.data);
  }, [data?.data]);

  const config: CustomAreaConfig = {
    data: dealData,
    filters: [
      {
        field: "title",
        operator: "in",
        value: ["WON", "LOST"],
      },
    ],
    xField: "timeText",
    yField: "value",
    seriesField: "state",

    stack: false,
    animation: true,
    startOnZero: false,
    smooth: true,
    legend: {
      offsetY: -4,
    },
    yAxis: {
      tickCount: 4,
      label: {
        formatter: (v: string) => {
          return `$${Number(v) / 1000}k`;
        },
      },
    },

    tooltip: {
      formatter: (data: any) => {
        return {
          name: data.state,
          value: `$${Number(data.value) / 1000}k`,
        };
      },
    },
  };

  return (
    <Card
      style={{ height: "100%", width: "100%" }}
      styles={{
        header: { padding: "8px 16px" },
        body: { padding: "24px 24px 0 24px" },
      }}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <DollarOutlined />
          <Text size="sm" style={{ marginLeft: "0.5rem" }}>
            Deals
          </Text>
        </div>
      }
    >
      <Area {...config} height={325} />
    </Card>
  );
};

export default DealsChart;
