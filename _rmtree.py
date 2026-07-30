import os, ctypes, sys, traceback

kernel32 = ctypes.windll.kernel32

def rm_file(p):
    if not kernel32.DeleteFileW(p):
        err = ctypes.GetLastError()
        print(f"FAIL file {p} err={err}", flush=True)
        return False
    return True

def rm_dir(p):
    if not kernel32.RemoveDirectoryW(p):
        err = ctypes.GetLastError()
        print(f"FAIL dir {p} err={err}", flush=True)
        return False
    return True

target = r"E:\work\my-saas"
print("exists check:", os.path.exists(target), flush=True)
if not os.path.exists(target):
    print("already gone", flush=True)
    sys.exit(0)

try:
    for root, dirs, files in os.walk(target, topdown=False):
        for f in files:
            rm_file(os.path.join(root, f))
        for d in dirs:
            rm_dir(os.path.join(root, d))
    rm_dir(target)
    print("DONE exists:", os.path.exists(target), flush=True)
except Exception as e:
    print("EXCEPTION:", e, flush=True)
    traceback.print_exc()
