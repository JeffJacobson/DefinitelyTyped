export class Engine extends MessageDispatcher {
    constructor(
        containerElementId: string,
        gameClass: new() => GameObject,
        videoDriverClass: new(arg1: HTMLElement, arg2: number, arg3: number) => VideoNullDriver,
        systemClasses?: Array<new() => System>,
    );
    id: number;
    private mContainerElementId;
    private mContainerElement;
    private mVideoDriverClass;
    private mSystemClasses;
    private mStageWidth;
    private mStageHeight;
    private mLastUpdateTime;
    private mFrameNum;
    private mNumUpdates;
    private mMaxUpdatesPerFrame;
    private mLastRenderTime;
    private mSystems;
    private mGameObject;
    private mIsRunning;
    private mIsStarted;
    private mIsPanic;
    private mRAFHandle;
    private mViewport;
    private mVideo;
    private mPaused;
    private mUnpausing;
    private mPauseOnHide;
    private mPauseOnBlur;
    private mTagCache;
    private mGameClass;
    private mStage;
    private mWasStopped;
    private mFrameTimes;
    private mUseHiDPR;
    private mPendingDispose;
    __initialize(): void;
    private __update;
    pause(): void;
    resume(): void;
    __setUnpaused(): void;
    private __bootViewport;
    private __bootSystems;
    __checkVisibility(): void;
    private __bootStage;
    private __onVisibilityChangeFallback;
    __onVisibilityChange(): void;
    hasSystem(systemTypeName: any): boolean;
    private __addSystem;
    getSystem<T>(typeName: T): T | null;
    private __bootVideo;
    start(): void;
    stop(): void;
    destroy(): void;
    __dispose(): void;
    private __internalUpdate;
    private __internalSystemPostUpdate;
    private __internalSystemRender;
    protected onTagUpdated(child: GameObject, oldTag: string | null, newTag: string | null): void;
    protected onChildrenAdded(child: GameObject, parent: any): void;
    protected onChildrenChanged(child: GameObject): void;
    protected onChildrenRemoved(child: GameObject): void;
    protected onComponentAdded(child: GameObject, component: Component): void;
    protected onComponentRemoved(child: GameObject, component: Component): void;
    set ups(arg: number);
    get ups(): number;
    get viewport(): Viewport;
    get containerElement(): Element;
    set pauseOnHide(arg: boolean);
    get pauseOnHide(): boolean;
    set pauseOnBlur(arg: boolean);
    get pauseOnBlur(): boolean;
    get isPaused(): boolean;
    get stage(): Stage;
    get containerElementId(): string;
    set useHiDPR(arg: boolean);
    get useHiDPR(): boolean;
    get frameNum(): number;
    get numUpdates(): number;
    set maxUpdatesPerFrame(arg: number);
    get maxUpdatesPerFrame(): number;
}
import { Component } from "./core/Component";
import { GameObject } from "./core/GameObject";
import { System } from "./core/System";
import { Viewport } from "./core/Viewport";
import { Stage } from "./display/Stage";
import { VideoNullDriver } from "./drivers/VideoNullDriver";
import { MessageDispatcher } from "./messages/MessageDispatcher";
