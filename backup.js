
/* backup.js - Automatic backup on every change */

const BACKUP_KEY = "prio3d_last_backup_hash";

/* Convert tasks to JSON string */
function getBackupData() {
  try {
    const raw = localStorage.getItem("prio3d_pro_tasks_v1");
    return raw || "[]";
  } catch (e) {
    console.error("Erro ao coletar backup:", e);
    return "[]";
  }
}

/* Trigger browser download */
function downloadBackupFile(jsonString) {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    const stamp = new Date().toISOString().slice(0,10);
    a.href = url;
    a.download = `prio3d-backup-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

/* Hash simple method */
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

/* Main backup trigger */
function backupIfChanged() {
    const data = getBackupData();
    const currentHash = simpleHash(data);
    const lastHash = localStorage.getItem(BACKUP_KEY);

    if (String(currentHash) !== String(lastHash)) {
        downloadBackupFile(data);
        localStorage.setItem(BACKUP_KEY, String(currentHash));
    }
}

/* Expose function */
window.triggerAutoBackup = backupIfChanged;
