import {
    Box,
    Select,
    Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { SortOption } from "../../types";

interface RepositorySortProps {
    value: SortOption;
    onChange: (sort: SortOption) => void;
}

export default function RepositorySort({ value, onChange }: RepositorySortProps) {
    const { t } = useTranslation();

    return (
        <Box display="flex" alignItems="center" gap={2} mb={4}>
            <Text fontWeight="medium" whiteSpace="nowrap">
                {t("profile.sort.label")}:
            </Text>
            <Select
                value={value}
                onChange={(e) => onChange(e.target.value as SortOption)}
                maxW="220px"
                focusBorderColor="brand.purple"
                borderColor="brand.purple"
                color="brand.purple"
                fontWeight="medium"
                size="sm"
                borderRadius="md"
            >
                <option value="created">{t("profile.sort.created")}</option>
                <option value="updated">{t("profile.sort.updated")}</option>
                <option value="pushed">{t("profile.sort.pushed")}</option>
                <option value="full_name">{t("profile.sort.full_name")}</option>
                <option value="stargazers">{t("profile.sort.stars")}</option>
            </Select>
        </Box>
    );
}
